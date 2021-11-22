<template>
    <main>
        <section class="bg-green-300">
            <div class="container mx-auto py-40 text-center md:text-left">
                <h1 class="font-black text-white text-7xl">Contact</h1>
            </div>
        </section>
        <section>
            <div class="container mx-auto  py-40">
                <h2 class="font-black text-6xl mb-24 text-center">Contact me ! 📬</h2>
                <form action="" class="flex flex-col max-w-3xl mx-auto">
                    <label for="firstname" class="ml-3 text-xl font-bold">Name :</label>
                    <input
                        type="text"
                        name="name"
                        id="firstname"
                        class="p-3 m-2 border-2 border-black"
                    />
                    <label for="email" class="ml-3 text-xl font-bold"
                        >Email :</label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="p-3 m-2 border-2 border-black"
                    />
                    <label for="message" class="ml-3 text-xl font-bold"
                        >Message :</label
                    >
                    <textarea
                        name="message"
                        id="message"
                        class="p-3 m-2 border-2 border-black"
                        rows="10"
                    ></textarea>
                    <input
                        type="submit"
                        value="Send !"
                        class="
                            p-3
                            m-2
                            border-2 border-blue-600
                        
                            bg-blue-600
                            text-white
                            hover:bg-blue-700
                            hover:border-blue-700
                            cursor-pointer
                        "
                    />
                </form>
            </div>
        </section>
    </main>
</template>
