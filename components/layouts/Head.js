import HeadNext from "next/head";

const Head = ()=>(
<HeadNext>
    <meta charset='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
    <meta name='description' content='Description' />
    <meta name='keywords' content='Keywords' />
    <link rel='manifest' href='/manifest.json' />
    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
    <link href="icons/icon-192x192.png" rel="icon" sizes="192x192"></link>
    <link href="icons/icon-128x128.png" rel="icon" sizes="128x128"></link>
    <link rel='apple-touch-icon' href='/apple-icon.png'></link>
    <meta name='theme-color' content='#eeeeee' />
    <link rel="icon" href="/favicon.ico" />
    <title>Next.js PWA Example</title>
</HeadNext>);
export default Head;