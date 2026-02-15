import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    const user = await verifyToken(token);

    return (
      <div>
        <h1>Welcome {user.username}</h1>
        <p>This is a protected dashboard.</p>

        <form action="/api/logout" method="POST">
          <button type="submit">Logout</button>
        </form>
      </div>
    );
  } catch {
    redirect("/login");
  }
}
