//sanity/lib/client.ts

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:process.env.SANITY_API,
  useCdn: true,
})
