import bcryptjs from 'bcryptjs';

export default async (password: string): Promise<String> => {
  const hashPassword = await bcryptjs.hash(password, 10);
  return hashPassword;
}
