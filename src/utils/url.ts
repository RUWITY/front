export function isValidURL(url: string): boolean {
  const urlPattern: RegExp =
    /^(https?|http):\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)*$/;
  return urlPattern.test(url);
}
