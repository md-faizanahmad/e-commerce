// src/types/navbar.ts

// Category is dynamic: we don't know what the API will send.
// So it should just be a string.
export type Category = string;

export interface NavCategory {
  id: number;
  name: Category;
  path: string;
}

export interface NavbarProps {
  categories: NavCategory[];
}
