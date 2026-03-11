import Image from "next/image";
import type { ImageAsset } from "@/data/images";

type ImagePanelProps = {
  image: ImageAsset;
  className?: string;
  priority?: boolean;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
};

export function ImagePanel({ image, className, priority = false, imgClassName, imgStyle }: ImagePanelProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-black/25 ${className ?? ""}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        style={imgStyle}
        priority={priority}
      />
    </div>
  );
}
