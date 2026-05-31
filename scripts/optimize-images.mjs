import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const outDir = path.join(root, 'public', 'images')

const jobs = [
  { in: 'src/assets/merlion.webp', out: 'merlion.webp', width: 1280, quality: 78 },
  { in: 'src/assets/bg.webp', out: 'bg.webp', width: 960, quality: 75 },
  { in: 'src/assets/warehouse.webp', out: 'warehouse.webp', width: 640, quality: 75 },
  { in: 'src/assets/airport.webp', out: 'airport.webp', width: 960, quality: 75 },
  { in: 'src/assets/student.jpg', out: 'student.webp', width: 640, quality: 80 },
]

await mkdir(outDir, { recursive: true })

for (const job of jobs) {
  const input = path.join(root, job.in)
  const output = path.join(outDir, job.out)
  await sharp(input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 4 })
    .toFile(output)
  console.log(`Wrote ${job.out}`)
}
