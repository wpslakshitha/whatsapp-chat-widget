import WhatsAppChatWidget from "@/app/components/WhatsAppChatWidget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="absolute h-screen flex items-center justify-center inset-0 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative ">
          <p className='text-6xl font-bold '>Hello whatsapp chat widget 👋! </p>
          <a href={"https://www.linkedin.com/in/sachith-lakshitha/"}>@wpslakshitha </a>
        </div>
      </div>

      <WhatsAppChatWidget/>
    </main>
  );
}
