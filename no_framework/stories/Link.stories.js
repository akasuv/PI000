import createLink, {linkInterface} from "../components/Link";

export default {
  title: "HTML/Link",
};

export const Primary = () =>
  createLink({
    label: "Primary Link",
    href: "https://google.com",
    primary: true,
  });

export const Secondary = () =>
  createLink({ label: "Secondary Link", href: "https://google.com" });

export const Highlighted = () =>
  createLink({ label: "Highlighted Link", href: "https://google.com", highlighted: true });

