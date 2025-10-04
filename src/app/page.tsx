import { ButtonGotoPage } from "@/components/button-goto-page/ButtonGotoPage";

export default function HomePage() {
  return (
    <section className="container mx-auto flex justify-center items-center flex-wrap gap-y-2 gap-x-2 h-screen">
      <ButtonGotoPage
        displayText="Plugins"
        href="/plugins"
        color="bg-yellow-500"
      />
      <ButtonGotoPage
        displayText="Players"
        href="/players"
        color="bg-green-500"
      />
    </section>
  )
}

