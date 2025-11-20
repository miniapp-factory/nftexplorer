"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function NFTList() {
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    // Mock data for top 5 trending NFTs
    const mockData: NFT[] = [
      {
        id: "1",
        name: "CryptoPunk #3100",
        description: "A rare CryptoPunk with a unique look.",
        image: "https://example.com/cryptopunk3100.png",
      },
      {
        id: "2",
        name: "Bored Ape #1234",
        description: "A popular Bored Ape with a cool accessory.",
        image: "https://example.com/boredape1234.png",
      },
      {
        id: "3",
        name: "Art Blocks #5678",
        description: "A generative art piece from Art Blocks.",
        image: "https://example.com/artblocks5678.png",
      },
      {
        id: "4",
        name: "Meebit #4321",
        description: "A unique Meebit with a distinct style.",
        image: "https://example.com/meebit4321.png",
      },
      {
        id: "5",
        name: "Axie #9876",
        description: "An Axie with powerful stats.",
        image: "https://example.com/axie9876.png",
      },
    ];
    setNfts(mockData);
  }, []);

  return (
    <div className="grid gap-4 w-full max-w-2xl">
      {nfts.map((nft) => (
        <Card key={nft.id} className="p-4">
          <CardHeader>
            <CardTitle>{nft.name}</CardTitle>
            <CardDescription>{nft.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
