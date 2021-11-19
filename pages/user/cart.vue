<template>
    <main class="container mx-auto">
        <h1 class="text-5xl text-center">Panier</h1>
        <div class="flex flex-row">
            <div class="w-2 p-3 box-border flex">
                <div class="w-1/3">
                    <div class="w-20 h-20 bg-gray-500"></div>
                </div>
                <div class="w-2/3 flex justify-between">
                    <p>Poele</p>
                    <p>50 €</p>
                </div>
            </div>
            <div class="w-1/3 box-border">
                <div class="border rounded-xl p-3">
                    <h3 class="text-2xl pb-6">Résumé de votre panier :</h3>
                    <div class="flex justify-between px-2 pt-1">
                        <p>Produits</p>
                        <p>150 €</p>
                    </div>
                    <div class="flex justify-between px-2 pt-1">
                        <p>Livraison</p>
                        <p>6 €</p>
                    </div>
                    <div class="text-center pt-6">
                        <button
                            class="
                                w-11/12
                                p-3
                                m-2
                                rounded-lg
                                bg-blue-400
                                text-white
                                hover:bg-blue-500
                            "
                        >
                            Valider ma commande
                        </button>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        name="reduccode"
                        id="reduccode"
                        class="border rounded-xl w-full p-3 mt-5"
                        placeholder="code de réduction"
                    />
                </div>
            </div>
        </div>
    </main>
</template>
