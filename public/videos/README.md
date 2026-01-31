# Background Videos Folder

Place your background video files here for the home page hero section.

## Supported Formats
- `.mp4` (Recommended - best compatibility)
- `.webm` (Good for smaller file sizes)
- `.mov` (Less recommended)

## Usage

1. Add your video file to this folder (e.g., `background.mp4`)
2. Open `components/Hero.tsx`
3. Find the line: `const videoSrc = '/videos/background.mp4';`
4. Change `background.mp4` to your video filename
5. Uncomment the video element in the Hero component (remove `{/* */}`)

## Video Recommendations

- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Keep under 10MB for best performance
- **Format**: MP4 with H.264 codec
- **Content**: Should be subtle and not distract from text

## Example

If your video is named `hero-background.mp4`:
```tsx
const videoSrc = '/videos/hero-background.mp4';
```

Then uncomment the video element in Hero.tsx.

