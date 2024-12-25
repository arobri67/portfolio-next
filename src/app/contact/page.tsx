import Image from "next/image";

import { CopyEmail } from "@/components/contact-app/button-copy-email";
import { Socials } from "@/components/contact-app/socials";
import { SectionSeparator } from "@/components/section-separator";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl">
        <SectionSeparator title="Contact" />
        <div className="flex flex-col gap-8">
          <Card className="relative h-[450px] w-full overflow-hidden p-0">
            <Image
              src="https://utfs.io/a/uo6z56scs7/G8reinZKvneWv2OkitiuOCsMD0fjFI4iGZwtgShV5WnXdT8K"
              alt="map of Barcelona"
              fill
              quality={100}
              className="aspect-video object-cover"
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

          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-semibold">Let's Connect!</h2>
            <p className="max-w-md text-muted-foreground">
              Feel free to reach out through any of these platforms. I'm always excited to discuss new opportunities and ideas!
            </p>
            <CopyEmail email="hi@arnaudobri.me" />
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
