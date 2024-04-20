import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card2() {
  return (
    <CardContainer className="inter-var px-4">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-red-800/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-red-800"
        >
          $Despair Tokens rises no hope shall remain, Solana is over and all the bad things
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >

        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={10}
          className="w-full mt-4"
        >
          <img
            src="https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F35683%252F9838ef87-6c1b-4a26-9e9f-ac9febb898a8%252Furi%252Fimage-2023-08-28-22-40-7u8po?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=b5c1faf7f9b87701c8bcff5210477c0d"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
