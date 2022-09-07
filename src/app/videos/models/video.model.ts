export interface Video {
  id?: string;
  name: string;
  description?: string;
  url: string;
  sharedBy?: User;
}

export interface User {
  id: string;
  email?: string;
  name: string
}