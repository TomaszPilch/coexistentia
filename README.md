# Coex Hrádek

Bilingual Polish/Czech campaign website for the Coex Hrádek electoral committee.
The site presents the committee's priorities, election program, group photo,
15 candidate profiles, and contact links.

## Technology

- React 19
- TanStack Start and TanStack Router
- TypeScript
- Vite
- Tailwind CSS
- Nitro Node server
- Yarn 1

## Local development

Requirements:

- Node.js 22
- Yarn 1.22

Install dependencies and start the development server:

```sh
yarn install --frozen-lockfile
yarn dev
```

Create and preview a production build:

```sh
yarn build
yarn preview
```

Other available commands:

```sh
yarn lint
yarn format
yarn build:dev
```

## Project structure

```text
src/routes/index.tsx       Main campaign page and candidate content
src/routes/__root.tsx      Global metadata, favicon links, and application shell
src/assets/                Candidate, group, and hero photographs
src/styles.css             Theme variables and global styles
public/                    Favicons and public static files
charts/coexistentia/       Kubernetes Helm chart
.github/workflows/         Container image release workflow
```

Candidate photographs are stored as optimized JPEG files. Keep new portraits
close to the existing `1280x1920` dimensions to avoid unnecessary download and
image-decoding costs.

## Docker

The production image contains the Nitro Node server and runs as a non-root user
on port `3000`.

```sh
docker build --build-arg NODE_ENV=production -t coexistentia .
docker run --rm -p 3000:3000 coexistentia
```

Open `http://localhost:3000`.

## Container releases

Pushing a semantic version tag matching `v*.*.*`, for example `v1.0.0`, runs the
`Docker Image CI` GitHub Actions workflow. It publishes both the version tag and
`latest` to:

```text
europe-central2-docker.pkg.dev/tomasz-codes/tomasz-codes/coexistentia
```

The repository must provide a `GCLOUD_API_KEYFILE` Actions secret containing the
base64-encoded Google service account JSON key used to access Artifact Registry.

Example release:

```sh
git tag v1.0.0
git push origin v1.0.0
```

## Kubernetes

The Helm chart creates a Deployment, ClusterIP Service, ServiceAccount, health
probes, and optional Ingress and HorizontalPodAutoscaler.

Install or upgrade a release:

```sh
helm upgrade --install coexistentia ./charts/coexistentia \
  --namespace coexistentia \
  --create-namespace \
  --set image.tag=v1.0.0
```

For private Artifact Registry access, configure `imagePullSecrets`. Ingress,
resources, autoscaling, pod scheduling, and runtime environment variables can be
configured in `charts/coexistentia/values.yaml` or in a separate values file:

```sh
helm upgrade --install coexistentia ./charts/coexistentia \
  --namespace coexistentia \
  --create-namespace \
  --values values.production.yaml
```

Validate the chart locally:

```sh
helm lint ./charts/coexistentia
helm template coexistentia ./charts/coexistentia
```
