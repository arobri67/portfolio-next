import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between">
          <div className="order-2">

            <Logo />
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy;
              {" "}
              {new Date().getFullYear()}
              {" "}
              arnaudobri
              <span className="text-primary">.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
