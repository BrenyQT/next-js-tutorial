import { url } from "inspector";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0T7bkuB1I3UVyKwPbL0hC8jzpEAfBtUkcvPWuGxH3rV1w9q4",
  "https://utfs.io/f/0T7bkuB1I3UVRapHhqUxbcd2oEMpjNafJzD6XCgwAkuqvmK8",
  "https://utfs.io/f/0T7bkuB1I3UVOGouABTRlS5quMbtA107BxcgydmiDfWHrTpo",
  "https://utfs.io/f/0T7bkuB1I3UV9NqyVWoJwOQk9Yx1zr63sS584dNTCgBAMPjo",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
