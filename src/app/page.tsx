import Pricing from "@/components/landing-page/Pricing";
import { getProducts, getUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const [user, products] = await Promise.all([
    getUser(supabase), //get the currently authenticted users
    getProducts(supabase), // gets all the active products with their prices
  ]);

  // if (user) {
  //   return redirect("/dashboard");
  // }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Pricing products={products ?? []} />
    </main>
  );
}
