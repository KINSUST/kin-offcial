export const getLoggedInUser = async () => {
    const response = await fetch(`${process.env.SERVER_URL}/api/v1/auth/me`, {
      cache: "no-store",
      credentials:"include"
    });
    const result = await response.json();
    
    return result?.data || null;
  };