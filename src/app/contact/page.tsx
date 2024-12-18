import Image from "next/image";

import { Contact } from "@/components/contact-app/contact";
import { SectionSeparator } from "@/components/section-separator";
import { Card } from "@/components/ui";

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl">
        <SectionSeparator title="Contact" />
        <div className="mt-8 flex flex-col gap-8">
          <Contact />
          <Card className="relative h-[320px] w-full overflow-hidden p-0">
            <Image
              src="https://utfs.io/a/uo6z56scs7/G8reinZKvneWv2OkitiuOCsMD0fjFI4iGZwtgShV5WnXdT8K"
              alt="map or Barcelona"
              fill
              quality={100}
              className="object-cover"
            />
            <div className="absolute bottom-1/2 right-1/2 size-20 translate-x-1/2 translate-y-1/2">
              <div className="relative size-full">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/50 [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-green-500" />
                <Image
                  src="https://utfs.io/a/uo6z56scs7/G8reinZKvneWTIKe5Dve7Gm2EPnabQKIvl93os1fxVMijOrW"
                  alt="Arnaud profile picture"
                  fill
                  quality={100}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
