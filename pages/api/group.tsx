import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  // @ts-ignore
  new URL('../../public/font/Contrail.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = req.nextUrl;
  const name = searchParams.get('name');

  if (!name) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            fontSize: 35,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
            color: 'white',
            fontFamily: '"Contrail"',
          }}
        >
          It&#39;s a fucking Tennessee mf. Ya&#39;ll nuttin&#39; to do here
          bitch!
        </div>
      ),
      {
        width: 1000,
        height: 1000,
        fonts: [
          {
            name: 'Contrail',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          fontFamily: '"Contrail"',
          backgroundColor: 'black',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 150,
            fontStyle: 'normal',
            color: 'white',
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          <b>{name}</b>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 25,
            fontStyle: 'normal',
            color: 'white',
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          Powered by Mad Maids
        </div>
      </div>
    ),
    {
      width: 500,
      height: 500,
      fonts: [
        {
          name: 'Contrail',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
