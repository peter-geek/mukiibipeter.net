import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    Mukiibi Peter | Full Stack developer | React/Node.js
                </title>
                <meta
                    name="description"
                    content="Mukiibi Peter is a full stack developer looking for a full stack React/Node position in the GMT-7 timezone. Visit the website to view the CV and more information about the developer. I will be ready respond to all the emails."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="sticky top-0 z-50 shadow-lg px-3 text-gray-300  bg-[#001b2b]">
                <div className="max-w-[1200px] mx-auto items-center flex">
                    <div className="">
                        <Link href="./">
                            <a className="font-bold text-3xl">
                                Full Stack Developer
                            </a>
                        </Link>
                    </div>
                    <nav className="ml-auto flex">
                        <Link href="./">
                            <a className="hover:text-[#f60] hover:border-[#f60] p-4 block border-b-2 border-transparent hover:bg-gray-800">
                                Home
                            </a>
                        </Link>
                        <Link href="./contact">
                            <a className="hover:text-[#f60] hover:border-[#f60] p-4 block border-b-2 border-transparent hover:bg-gray-800">
                                Contact me
                            </a>
                        </Link>
                        <Link href="./projects">
                            <a className="hover:text-[#f60] hover:border-[#f60] hover:bg-gray-800 p-4 block border-b-2 border-transparent">
                                Projects
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="h-[400px] relative z-10 banner-blend-orange">
                <Image objectFit="cover" layout="fill" src="/images/bg.webp" />
                <div className="absolute inset-0">
                    <div className="max-w-[1200px] text-white mx-auto px-3 flex items-center h-full z-40 relative">
                        <div>
                            <p className="text-5xl font-bold">I'm Peter</p>
                            <p className="text-3xl">
                                Full stack developer available for work
                            </p>
                        </div>
                        <div className="ml-auto mr-4 h-[200px] w-[200px] bg-black rounded-full overflow-hidden relative border-4 border-white shadow-2xl shadow-white">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                src="https://avatars.githubusercontent.com/u/31098726?v=4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center py-10 text-[#222]">
                <div className="flex flex-col">
                    <div className="h-[60px] w-[60px] relative mx-auto mb-4">
                        <Image
                            src="/images/docx.png"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <Link
                        href="https://docs.google.com/document/d/1ARi6IlWh9EpiDOlJwPcw2WHDD6lRxwut/edit?usp=sharing&ouid=117135054153739578559&rtpof=true&sd=true"
                        className="mx-auto"
                    >
                        <a
                            className="bg-[#f60] text-white py-2 px-4 rounded-md hover:scale-105"
                            target="_blank"
                        >
                            Click to preview
                        </a>
                    </Link>
                </div>
                <p className="mt-4">Get my professional experience on my CV</p>
            </div>
            <div className="bg-[#07476b] py-10">
                <div className="mx-auto wd text-gray-200 px-3">
                    <p className="text-center text-3xl font-semibold">
                        Projects shown below
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-[300px]">
                            <div className="m-3 rounded-xl overflow-hidden">
                                <div className="h-[150px] relative">
                                    <Image
                                        src="/images/cwasnsambya.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Link href="https://cwasnsambya.org/">
                                    <a
                                        target="_blank"
                                        className="bg-[#001b2b] p-3 block"
                                    >
                                        Child Welfare and Adoption Society
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="m-3 rounded-xl overflow-hidden">
                                <div className="h-[150px] relative">
                                    <Image
                                        src="/images/beyiddondolo.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Link href="https://www.beyiddondolo.com/">
                                    <a
                                        target="_blank"
                                        className="bg-[#001b2b] p-3 block"
                                    >
                                        Beyiddondolo
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="m-3 rounded-xl overflow-hidden">
                                <div className="h-[150px] relative">
                                    <Image
                                        src="/images/beyiddondolo-mobile.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Link href="https://play.google.com/store/apps/details?id=com.beyiddondolo.app&hl=en&gl=US">
                                    <a
                                        target="_blank"
                                        className="bg-[#001b2b] p-3 block"
                                    >
                                        Beyiddondolo - mobile
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="m-3 rounded-xl overflow-hidden">
                                <div className="h-[150px] relative">
                                    <Image
                                        src="/images/btgep.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Link href="https://www.btgep.org/">
                                    <a
                                        target="_blank"
                                        className="bg-[#001b2b] p-3 block"
                                    >
                                        BtGEP
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="m-3 rounded-xl overflow-hidden">
                                <div className="h-[150px] relative">
                                    <Image
                                        src="/images/hssb.png"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Link href="https://www.healthyschoolsupplybids.com/">
                                    <a
                                        target="_blank"
                                        className="bg-[#001b2b] p-3 block"
                                    >
                                        Healthy School Supply
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
