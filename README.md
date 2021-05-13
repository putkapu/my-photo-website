# my-photo-website

# Convert JPG to WEBP
`for file in photos/*; do cwebp -q 100 "$file" -o "${file%.*}.webp"; done`
