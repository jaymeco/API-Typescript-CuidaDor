import bcryptjs from 'bcryptjs';

export default async (hashedPassword: string, requestPassword: string): Promise<boolean> => {
  const isEqual = await bcryptjs.compare(requestPassword, hashedPassword)
  return isEqual;
}
