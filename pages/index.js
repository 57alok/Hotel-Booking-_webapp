// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import { title } from 'process'
export default function Home({exploreData,cardsData}) {
  
  return (
    <div className="">
      <Head>
        <title>Air-bnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    <Header/>
     <Banner/> 
     <main className="max-w-4xl mx-auto px-8 sm:px-16">
       <section className="pt-6">
         <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
         {/* pull soem data from server */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {exploreData?.map(({img,distance,location})=>(

            <SmallCard 
              key={img} 
              img={img} 
              distance={distance} 
              location={location}
              />
              ))}
         </div>
         
         </section>

         <section>
           <h2 className='test-4xl font-semibold py-8'>Live Anywhere</h2>
          {/* pull soem data from server */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
           {cardsData?.map(({img,title})=>(

             <MediumCard 
             key={img} 
             img={img} 
             title={title}
             />
           ))}
           </div>
         </section>

         <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
         />
     </main>
     <Footer  />
    </div>
  );
}




// export default Home

export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').
  then(
    (res)=>res.json()
  );

  const cardsData=await fetch('https://links.papareact.com/zp1').
  then(
    (res)=>res.json()
  );
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}