import { SoloShow } from "@/types/Exhibition"
import { Page } from "@/types/Page"
import { createClient, groq } from "next-sanity"

// TODO remove hard coded values
const config = {
  projectId: "0l2hhkcr",
  dataset: "production",
  apiVersion: "2023-07-11",
  useCdn: true,
}

export async function getBackgroundImageUrl(): Promise<any> {
  return createClient(config).fetch(
    groq`*[_type == "backgroundImage"][0]{
      _id,
      _createdAt,
      "imageUrl": image.asset->url,
  }`,
  )
}

export async function getHomepage(): Promise<any> {
  return createClient(config).fetch(
    groq`*[_type == "homepage"][0]{
      _id,
      _createdAt,
      header,
      "image": image.asset->url,
      text
  }`,
  )
}

export async function getPastWork(slug: string): Promise<any> {
  return createClient(config).fetch(
    groq`*[_type == "pastWork" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      images[]{
        "id": asset->_id,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
      },
      url,
      text
    }`,
    { slug },
  )
}

export async function getPastWorks(): Promise<any[]> {
  return createClient(config).fetch(
    groq`*[_type == "pastWork"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      url,
      content
    }`,
  )
}

export async function getExtraPage(slug: string): Promise<any> {
  return createClient(config).fetch(
    groq`*[_type == "extraPage" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug },
  )
}

export async function getNavTree(): Promise<any> {
  return createClient(config).fetch(
    groq`       *[_id == 'navigation'][0]{
      ...,
      sections[]{
        ...,
        target->{name, "slug": slug.current, _id, _type},
        links[]{
          ...,
          target->{name, "slug": slug.current, _id, _type},
          children[]{
            ...,
            target->{name, "slug": slug.current, _id, _type}
          }
        }
      },
      links[]{
        ...,
        target->{name, "slug": slug.current, _id, _type}
      }
    }`,
  )
}
