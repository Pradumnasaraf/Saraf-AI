## Saraf AI

**Saraf AI** is a chat assistant built with **Next.js**, using the OpenAI API framework to interface with the [Docker Model Runner](https://docs.docker.com/ai/model-runner). It runs entirely locally, ensuring your data remains private. Communication between the application and the LLM model is handled using the latest Docker Compose support for [running LLM models](https://docs.docker.com/ai/compose/models-and-compose/), enabling seamless and secure integration.

## Demo

https://github.com/user-attachments/assets/32fb49de-336b-406a-89ad-c1e9fc80fa60

## Prerequisites

- Docker and Docker Compose (version **2.38.0** or newer)

## Getting Started

1. Clone this repository.
2. Run `docker compose up`. This launches both the LLM model and the Next.js frontend. (Yes, it's that simple :))
3. Visit `http://localhost:3000` in your browser.

## Docker Compose Configuration

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    models:
      llm:
        endpoint_var: AI_MODEL_URL
        model_var: AI_MODEL_NAME
    environment:
      - AI_MODEL_KEY=not-needed

models:
  llm:
    model: ai/smollm2
```

This is a typical Docker Compose setup with an added `models` block. You can define and run multiple models within the same file. To switch models, update the `model` field under `models.llm`.

> `AI_MODEL_URL` and `AI_MODEL_NAME` are environment variables automatically generated and get added to the Next.js application by Docker Compose based on the defined model and used by the app to connect to the local LLM.

## License

This project is licensed under the Apache-2.0 license - see the [LICENSE](LICENSE) file for details.

## Security

If you discover a security vulnerability within this project, please check the [SECURITY](SECURITY.md) for more information.
