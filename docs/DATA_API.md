# API de dados do portfólio

**URL base:** `https://ewerton5.github.io/data`
**Formato:** JSON estático, somente `GET`, sem autenticação.
**Idiomas (`{lang}`):** `en-US` e `pt-BR`. Os dois têm a mesma estrutura; só o conteúdo em texto é traduzido.

Os arquivos ficam em `public/data/` e são copiados para `out/data/` no build. Os mesmos JSONs também são importados pelas páginas via o alias `data/*` (ver `tsconfig.json` e `next.config.mjs`).

```ts
const res = await fetch(`/data/${lang}/projects.json`);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();
```

> Caminhos de imagem que começam com `/` (ex.: `/projects/economyx/thumb.png`) são relativos à raiz do site: `https://ewerton5.github.io/projects/economyx/thumb.png`.

## Endpoints

| Endpoint                           | Tipo   | Conteúdo                             |
|------------------------------------|--------|--------------------------------------|
| `/data/{lang}/profile.json`        | objeto | Perfil, contato, experiência, skills |
| `/data/{lang}/projects.json`       | array  | Lista resumida de projetos           |
| `/data/{lang}/details/{slug}.json` | objeto | Detalhes de um projeto               |
| `/data/{lang}/education.json`      | objeto | Formação, certificações, idiomas     |
| `/data/{lang}/services.json`       | array  | Serviços oferecidos                  |
| `/data/{lang}/testimonials.json`   | array  | Depoimentos                          |
| `/data/{lang}/timeline.json`       | array  | Linha do tempo da carreira           |
| `/data/{lang}/setup.json`          | array  | Setup / ferramentas de trabalho      |

---

### `GET /data/{lang}/profile.json`

```ts
{
  shortName: string;
  name: string;
  title: string;
  heroSubtitle: { prefix: string; suffix: string };
  bio: { text: string; bold?: boolean }[][];   // parágrafos → trechos com destaque opcional
  about: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  profilePicture: string;                      // URL absoluta
  location: string;
  experience: {
    id: string; title: string; company: string;
    period: string; location: string; description: string;
  }[];
  skills: string[];
}
```

### `GET /data/{lang}/projects.json`

```ts
{
  id: string;                 // UUID
  slug: string;               // chave para /details/{slug}.json
  title: string;
  categories: string[];       // ex.: "Mobile", "Web", "FinTech", "Backend"...
  startDate: string;          // "YYYY-MM-DD"
  shortDescription: string;
  technologies: string[];
  images: { thumbnail: string };
  backgroundColor: string;    // hex, ex.: "#0F0F0F"
}[]
```

### `GET /data/{lang}/details/{slug}.json`

```ts
{
  platforms: {
    name: string;                 // ex.: "Mobile App", "Web (Admin Panel)"
    detailedDescription: string;
    learnings: string[];
    images: { url: string; orientation: "portrait" | "landscape" }[];
  }[];
  links?: { web?: string; github?: string; android?: string; ios?: string };
}
```

Nem todo projeto da lista tem arquivo de detalhes; para esses, a URL retorna 404. Os slugs disponíveis são os nomes dos arquivos em `public/data/{lang}/details/`. Trate `res.ok === false` como "sem detalhes":

```ts
async function getProject(lang: string, slug: string) {
  const list = await fetch(`/data/${lang}/projects.json`).then(r => r.json());
  const base = list.find((p: { slug: string }) => p.slug === slug);
  if (!base) return null;
  const res = await fetch(`/data/${lang}/details/${slug}.json`);
  return res.ok ? { ...base, ...(await res.json()) } : base;
}
```

### `GET /data/{lang}/education.json`

```ts
{
  academic: {
    id: string; institution: string; degree: string;
    period: string; description: string; credentialUrl: string;
  }[];
  certifications: {
    id: string; title: string; platform: string;
    year: string; credentialUrl: string;
  }[];
  languages: { id: string; language: string; level: string }[];
}
```

### `GET /data/{lang}/services.json`

```ts
{ id: string; icon: string; title: string; description: string }[]
// icon: identificador de ícone (ex.: "mobile"), não é URL
```

### `GET /data/{lang}/testimonials.json`

```ts
{ id: string; name: string; role: string; text: string; avatarUrl: string }[]
// avatarUrl: caminho relativo à raiz, ex.: "/profiles/andre-moura.jpeg"
```

### `GET /data/{lang}/timeline.json`

```ts
{ id: string; year: string; title: string; description: string }[]
```

### `GET /data/{lang}/setup.json`

```ts
{ id: string; iconName: string; title: string; description: string }[]
```

## Observações

- **Cache:** o GitHub Pages envia `Cache-Control: max-age=600`. Depois de um deploy, os dados novos podem levar até cerca de 10 minutos para aparecer.
- **CORS:** o GitHub Pages envia `Access-Control-Allow-Origin: *`, então dá para consumir de outros domínios.
- **Datas:** só `projects[].startDate` usa ISO. Os campos `period` e `year` são texto livre.
