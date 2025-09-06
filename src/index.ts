export function checkEnv(requiredVars: string[]) {
  const missing: string[] = [];

  for (const v of requiredVars) {
    if (!process.env[v]) {
      missing.push(v);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required environment variables: ${missing.join(", ")}`
    );
  }

  console.log("✅ All required environment variables are set!");
}
