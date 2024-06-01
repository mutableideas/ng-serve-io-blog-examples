import { RolesEnum } from "./role.type"

export type Claims = {
  role: RolesEnum;
  email: string;
  name: string;
}