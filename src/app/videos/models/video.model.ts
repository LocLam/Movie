export interface Video {
  id?: string;
  name: string;
  description?: string;
  url: any;
  sharedBy?: string;
  date?: string;
}

export interface User {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
}
