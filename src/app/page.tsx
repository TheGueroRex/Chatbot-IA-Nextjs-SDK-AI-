"use client";
import { useChat } from "ai/react";
import { ChangeEvent, use, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  const { handleInputChange, input, handleSubmit, messages, isLoading } =
    useChat();

  const [theme, setTheme] = useState("dark");
  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`${
        theme == "dark" ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col items-center min-w-[350px] w-full h-full p-5 max-sm:p-3 relative font-league`}
    >
      <style>
        {`
        .scroll-hidden::-webkit-scrollbar{
          display: none;
        }
        `}
      </style>
      <div
        className={`opacity-5   bg-[url('bg.svg')] bg-center absolute w-full h-full top-0 overflow-hidden`}
      >       
      </div>
      <header
        className={`${
          theme == "dark"
            ? "bg-gray-800 text-slate-200"
            : "bg-gray-200 text-black"
        } flex justify-between gap-4 w-full max-w-3xl h-24 mb-2 p-2 rounded-md z-10`}
      >
        <div className="h-full">
          <h1 className="text-xl mb-3 max-sm:text-base">
            Bienvenido a mi <span className="text-violet-500">Chatbot</span> de
            IA
          </h1>
          <p className="text-xs max-sm:text-[11px]">
            Potenciado por el modelo de{" "}
            <span className="text-violet-500">GTP-3.5-Turbo</span>
          </p>
          <p className="text-xs max-sm:text-[11px]">
            Desarrollado con el SDK de Next.js IA
          </p>
        </div>
        <div className="flex items-center h-full">
          <button
            onClick={toogleTheme}
            className={`${
              theme == "dark"
                ? "bg-gray-300 border-gray-300"
                : "bg-gray-600 border-gray-600"
            }  w-14 h-8 rounded-2xl border-2 scale-75 ml-[-0.5rem]`}
          >
            <span
              className={`${
                theme == "light"
                  ? "translate-x-[0%] bg-slate-200"
                  : "translate-x-[85%] bg-slate-800"
              }  grid place-items-center w-7 h-full rounded-2xl transition`}
            >
              <svg
                className={`${
                  theme == "light" ? "hidden" : "visible"
                } rotate-[-45deg] fill-violet-500`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_403_2921)">
                  <path d="M14.9999 23.9998C13.3194 23.9985 11.6579 23.6449 10.1225 22.9618C8.58707 22.2787 7.21197 21.2812 6.08591 20.0338C4.95134 18.7849 4.09532 17.309 3.57465 15.7041C3.05399 14.0992 2.88057 12.4019 3.06591 10.7248C3.36471 8.1148 4.50331 5.67251 6.31027 3.76563C8.11724 1.85875 10.4948 0.590487 13.0849 0.151782C14.7593 -0.106843 16.4681 -0.0372166 18.1159 0.356782C18.5474 0.467641 18.9414 0.691786 19.2572 1.00602C19.573 1.32026 19.7991 1.71317 19.9121 2.14411C20.0251 2.57504 20.0208 3.02833 19.8998 3.45709C19.7789 3.88584 19.5455 4.27448 19.2239 4.58278C14.6639 8.74878 15.0599 15.2268 20.0309 18.9928C20.3824 19.2686 20.6535 19.6337 20.8161 20.0499C20.9786 20.4661 21.0267 20.9182 20.9552 21.3593C20.8837 21.8003 20.6954 22.2142 20.4097 22.5577C20.124 22.9013 19.7515 23.162 19.3309 23.3128C17.9327 23.7696 16.4708 24.0015 14.9999 23.9998ZM15.0759 1.99978C14.5145 1.99843 13.9538 2.04089 13.3989 2.12678C11.2424 2.4915 9.26277 3.54683 7.75792 5.13391C6.25307 6.721 5.30447 8.75396 5.05491 10.9268C4.89891 12.3268 5.04268 13.744 5.47665 15.0842C5.91062 16.4244 6.62487 17.6569 7.57191 18.6998C8.95824 20.1795 10.7442 21.225 12.7131 21.7096C14.682 22.1942 16.7492 22.097 18.6639 21.4298C18.7464 21.3989 18.8193 21.3467 18.8752 21.2785C18.9311 21.2103 18.9679 21.1286 18.9821 21.0416C18.9962 20.9546 18.987 20.8654 18.9556 20.7831C18.9241 20.7008 18.8714 20.6282 18.8029 20.5728C12.8739 16.0948 12.4029 8.08678 17.8549 3.12378C17.9175 3.06569 17.9626 2.99131 17.9852 2.90899C18.0078 2.82667 18.007 2.73968 17.9829 2.65778C17.9621 2.57087 17.918 2.49129 17.8552 2.42766C17.7925 2.36403 17.7135 2.31877 17.6269 2.29678C16.7917 2.09531 15.9351 1.99558 15.0759 1.99978Z" />
                </g>
                <defs>
                  <clipPath id="clip0_403_2921">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className={`${
                  theme == "light" ? "visible" : "hidden"
                } fill-violet-500`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_403_2830)">
                  <path d="M23 11H18.92C18.8421 10.449 18.6981 9.90948 18.491 9.393L22.018 7.349C22.1359 7.28557 22.2398 7.19911 22.3237 7.09476C22.4075 6.99041 22.4695 6.87029 22.5061 6.74152C22.5427 6.61275 22.553 6.47794 22.5365 6.34511C22.52 6.21227 22.477 6.08409 22.41 5.96818C22.3431 5.85228 22.2535 5.75099 22.1467 5.67033C22.0398 5.58967 21.9179 5.53129 21.7881 5.49863C21.6583 5.46597 21.5232 5.45971 21.3909 5.48021C21.2587 5.50072 21.1318 5.54757 21.018 5.618L17.488 7.665C17.1505 7.23872 16.765 6.85283 16.339 6.515L18.385 2.984C18.5082 2.75505 18.5374 2.48712 18.4664 2.23701C18.3954 1.9869 18.2298 1.77428 18.0046 1.64422C17.7795 1.51417 17.5126 1.4769 17.2604 1.54033C17.0083 1.60376 16.7908 1.7629 16.654 1.984L14.607 5.509C14.0906 5.30172 13.551 5.15768 13 5.08V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V5.08C10.449 5.15768 9.90941 5.30172 9.393 5.509L7.349 1.982C7.21221 1.7609 6.99469 1.60176 6.74255 1.53833C6.49042 1.4749 6.22349 1.51217 5.99836 1.64222C5.77323 1.77228 5.60761 1.9849 5.5366 2.23501C5.4656 2.48512 5.49479 2.75305 5.618 2.982L7.664 6.515C7.23801 6.85283 6.85246 7.23872 6.515 7.665L2.985 5.618C2.87116 5.54757 2.74435 5.50072 2.61206 5.48021C2.47978 5.45971 2.34473 5.46597 2.21492 5.49863C2.0851 5.53129 1.96316 5.58967 1.85633 5.67033C1.7495 5.75099 1.65995 5.85228 1.59299 5.96818C1.52603 6.08409 1.48302 6.21227 1.46651 6.34511C1.45001 6.47794 1.46034 6.61275 1.4969 6.74152C1.53346 6.87029 1.5955 6.99041 1.67934 7.09476C1.76318 7.19911 1.86712 7.28557 1.985 7.349L5.509 9.393C5.30195 9.90948 5.15791 10.449 5.08 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H5.08C5.15791 13.551 5.30195 14.0905 5.509 14.607L1.982 16.651C1.86412 16.7144 1.76018 16.8009 1.67634 16.9052C1.5925 17.0096 1.53046 17.1297 1.4939 17.2585C1.45734 17.3873 1.44701 17.5221 1.46351 17.6549C1.48002 17.7877 1.52303 17.9159 1.58999 18.0318C1.65695 18.1477 1.7465 18.249 1.85333 18.3297C1.96016 18.4103 2.0821 18.4687 2.21192 18.5014C2.34173 18.534 2.47678 18.5403 2.60906 18.5198C2.74135 18.4993 2.86816 18.4524 2.982 18.382L6.512 16.335C6.84946 16.7613 7.23501 17.1472 7.661 17.485L5.618 21.016C5.49479 21.2449 5.4656 21.5129 5.5366 21.763C5.60761 22.0131 5.77323 22.2257 5.99836 22.3558C6.22349 22.4858 6.49042 22.5231 6.74255 22.4597C6.99469 22.3962 7.21221 22.2371 7.349 22.016L9.393 18.489C9.90947 18.6965 10.449 18.8412 11 18.92V23C11 23.2652 11.1054 23.5196 11.2929 23.7071C11.4804 23.8946 11.7348 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23V18.92C13.5509 18.8419 14.0904 18.6978 14.607 18.491L16.651 22.018C16.7878 22.2391 17.0053 22.3982 17.2574 22.4617C17.5096 22.5251 17.7765 22.4878 18.0016 22.3578C18.2268 22.2277 18.3924 22.0151 18.4634 21.765C18.5344 21.5149 18.5052 21.2469 18.382 21.018L16.336 17.487C16.762 17.1492 17.1475 16.7633 17.485 16.337L21.015 18.384C21.1288 18.4544 21.2557 18.5013 21.3879 18.5218C21.5202 18.5423 21.6553 18.536 21.7851 18.5034C21.9149 18.4707 22.0368 18.4123 22.1437 18.3317C22.2505 18.251 22.34 18.1497 22.407 18.0338C22.474 17.9179 22.517 17.7897 22.5335 17.6569C22.55 17.5241 22.5397 17.3893 22.5031 17.2605C22.4665 17.1317 22.4045 17.0116 22.3207 16.9072C22.2368 16.8029 22.1329 16.7164 22.015 16.653L18.488 14.609C18.6962 14.092 18.8413 13.5518 18.92 13H23C23.2652 13 23.5196 12.8946 23.7071 12.7071C23.8946 12.5196 24 12.2652 24 12C24 11.7348 23.8946 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11ZM12 17C5.392 16.79 5.394 7.209 12 7C18.608 7.21 18.606 16.791 12 17Z" />
                </g>
                <defs>
                  <clipPath id="clip0_403_2830">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
      </header>
      <section
        className={`${
          theme == "dark" ? "text-gray-100" : "text-gray-900"
        } scroll-hidden max-w-2xl w-full max-h-[70vh] overflow-y-scroll `}
      >
        {messages.map((m) => (
          <div className={`mb-10 flex flex-col`} key={m.id}>
            <div className={`text-sm flex items-center gap-2`}>
              <span className="flex rounded-[50%] w-8 h-8 bg-slate-400 overflow-hidden">
                {m.role == "assistant" ? (
                  <Image
                    src="/images/myAvatar.jpeg"
                    alt=""
                    width={500}
                    height={500}
                  />
                ) : (
                  ""
                )}
              </span>
              {m.role == "assistant" ? "TheGüeroIA" : "Tu"}
            </div>
            <p className="px-10">{m.content}</p>
          </div>
        ))}
      </section>
      <form
        action=""
        className="flex max-w-3xl w-full mt-auto relative"
        onSubmit={handleSubmit}
      >
        <div
          className={`${
            isHovered || isFocused
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
              : theme == "dark"
              ? "bg-slate-600"
              : "bg-slate-300"
          } absolute bg-slate-600 w-full h-full rounded-md transition-all`}
        ></div>

        <textarea
          onInput={handleInput}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={input}
          placeholder="Preguntame cualquier cosa..."
          className={`${
            theme == "dark"
              ? "bg-gray-900 text-slate-100 placeholder:text-slate-600"
              : "bg-gray-100 text-slate-900"
          } input-text scroll-hidden z-10 w-[97%] h-[50px] max-h-[150px] m-[2px] mr-0 p-2 rounded-md rounded-tr-none rounded-br-none resize-none focus:outline-none`}
          onChange={handleInputChange}
        ></textarea>
        <div
          className={`${
            isLoading || !input ? "visible" : "hidden"
          } absolute z-30 w-[7%] h-full right-0`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></div>
        <button
          className={`${
            theme == "dark" ? "bg-gray-900" : "bg-gray-100"
          } grid place-content-center w-[7%] h-auto m-[2px] ml-0 rounded-md rounded-tl-none rounded-bl-none z-20 focus:outline-none max-sm:w-10`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg
            className={`${
              theme == "dark" ? "fill-slate-600 " : "fill-slate-300"
            } transition hover:fill-purple-500 max-sm:scale-75`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_403_2804)">
              <path d="M11.0068 2.57812L10.9998 18.0161C10.9998 18.2813 11.1052 18.5357 11.2927 18.7232C11.4802 18.9108 11.7346 19.0161 11.9998 19.0161C12.265 19.0161 12.5194 18.9108 12.7069 18.7232C12.8945 18.5357 12.9998 18.2813 12.9998 18.0161L13.0068 2.59512L15.9188 5.50812C16.1063 5.69559 16.3606 5.8009 16.6258 5.8009C16.891 5.8009 17.1453 5.69559 17.3328 5.50812C17.5203 5.32059 17.6256 5.06628 17.6256 4.80112C17.6256 4.53595 17.5203 4.28164 17.3328 4.09412L14.1218 0.879115C13.8432 0.600336 13.5124 0.379186 13.1483 0.228301C12.7842 0.0774169 12.3939 -0.000244141 11.9998 -0.000244141C11.6057 -0.000244141 11.2154 0.0774169 10.8513 0.228301C10.4872 0.379186 10.1564 0.600336 9.87781 0.879115L6.66681 4.09112C6.47934 4.27864 6.37402 4.53295 6.37402 4.79812C6.37402 5.06328 6.47934 5.31759 6.66681 5.50512C6.85434 5.69259 7.10865 5.7979 7.37381 5.7979C7.63897 5.7979 7.89328 5.69259 8.08081 5.50512L11.0068 2.57812Z" />
              <path d="M22 16.9994V20.9994C22 21.2646 21.8946 21.519 21.7071 21.7065C21.5196 21.894 21.2652 21.9994 21 21.9994H3C2.73478 21.9994 2.48043 21.894 2.29289 21.7065C2.10536 21.519 2 21.2646 2 20.9994V16.9994C2 16.7342 1.89464 16.4798 1.70711 16.2923C1.51957 16.1047 1.26522 15.9994 1 15.9994C0.734784 15.9994 0.48043 16.1047 0.292893 16.2923C0.105357 16.4798 0 16.7342 0 16.9994L0 20.9994C0 21.795 0.31607 22.5581 0.87868 23.1207C1.44129 23.6833 2.20435 23.9994 3 23.9994H21C21.7956 23.9994 22.5587 23.6833 23.1213 23.1207C23.6839 22.5581 24 21.795 24 20.9994V16.9994C24 16.7342 23.8946 16.4798 23.7071 16.2923C23.5196 16.1047 23.2652 15.9994 23 15.9994C22.7348 15.9994 22.4804 16.1047 22.2929 16.2923C22.1054 16.4798 22 16.7342 22 16.9994Z" />
            </g>
            <defs>
              <clipPath id="clip0_403_2804">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
      <footer
        className={`${
          theme == "dark" ? "text-slate-200" : "text-slate-90"
        } flex gap-2 mt-2`}
      >
        <p className="text-sm">Desarrollado por</p>
        <Link
          href={"https://www.luisfernandomc.com/"}
          className="text-violet-500 font-bold text-sm"
        >
          luisfernandomc.com
        </Link>
        <Image
          className="w-5 h-5 rounded-[50%]"
          src="/images/myAvatar.jpeg"
          alt=""
          width={500}
          height={500}
        />
      </footer>
    </main>
  );
}

export default HomePage;
