import sharp from 'sharp'
import toIco from 'to-ico'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const svgPath = join(publicDir, 'favicon.svg')
const svg = readFileSync(svgPath)

const sizes = [16, 32]
const pngs = await Promise.all(
  sizes.map((size) => sharp(svg).resize(size, size).png().toBuffer())
)
const ico = await toIco(pngs)
writeFileSync(join(publicDir, 'favicon.ico'), ico)

const applePng = await sharp(svg).resize(180, 180).png().toBuffer()
writeFileSync(join(publicDir, 'apple-touch-icon.png'), applePng)
