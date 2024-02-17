import React from "react";
import Com from "./Com";
import { Metadata } from "next";
import Head from "next/head";





export default function Profilessss({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Com params={{
        slug: params.slug
      }} />
    </div>
  );
}
