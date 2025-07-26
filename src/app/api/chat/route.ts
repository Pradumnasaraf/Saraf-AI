import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  baseURL: process.env.AI_MODEL_URL || '',
  apiKey: process.env.AI_API_KEY || '',
});

const model = process.env.AI_MODEL_NAME || '';

export async function POST(req: Request) {
  try {
    const { message, messages } = await req.json();
    
    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages must be an array' },
        { status: 400 }
      );
    }
    
    const stream = await openai.chat.completions.create({
      messages: [...messages, { role: 'user', content: message }],
      model,
      stream: true,
      temperature: 0.7,
      max_tokens: 2000,
    });

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              const text = chunk.choices[0]?.delta?.content || '';
              if (text) {
                controller.enqueue(new TextEncoder().encode(text));
              }
            }
          } catch (streamError) {
            console.error('Streaming error:', streamError);
            controller.error(streamError);
          } finally {
            controller.close();
          }
        },
      }),
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      }
    );
  } catch (error: unknown) {
    console.error('OpenAI API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStatus = (error as { status?: number })?.status || 500;
    
    return NextResponse.json(
      { 
        error: 'Failed to get response from AI',
        details: errorMessage,
      },
      { status: errorStatus }
    );
  }
} 