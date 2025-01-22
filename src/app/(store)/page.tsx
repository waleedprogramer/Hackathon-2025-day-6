import Main from "./home/page";
import  demoData  from '../db';
import { client } from '@/sanity/lib/client';

async function uploadImageToSanity(imageUrl: string) {
  const res = await fetch(imageUrl);
  const blob = await res.blob(); 

  // Upload the Blob as an image asset
  const imageAsset = await client.assets.upload('image', blob, {
    filename: 'image.jpg', 
  });

  return imageAsset._id; 
}


export default function Home() {
  async function insertData() {
    try {
      const result = await Promise.all(
        demoData.map(async (item: any) => {
          const imageAssetId = await uploadImageToSanity(item.image);

          return client.create({
            _type: 'product',
            name: item.name,
            price: item.price,
            description: item.description,
            image: {
              _type: 'image',
              asset: {
                _ref: imageAssetId, 
                _type: 'reference',
              },
            },
          });
        })
      );
      console.log(`Data inserted: `, result);
    } catch (error: any) {
      console.error(`Data is not inserted: `, error.message);
    }
  }

  // insertData(); 
  return (
    <>
    <Main/>
    </>
  );
}
