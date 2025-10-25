export interface Brand {
  name: string;
  link: string;
}

export interface SearchBar {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export interface CartLink {
  icon?: React.ReactNode;
  link: string;
  itemCount: number;
}

export interface UserMenuLink {
  label: string;
  path: string;
}

export interface UserMenu {
  icon?: React.ReactNode;
  links: UserMenuLink[];
}

export interface HeaderProps {
  brand: Brand;
  search: SearchBar;
  cart: CartLink;
  userMenu: UserMenu;
}
