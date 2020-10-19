const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
            lat: "-29.9218295",
            lng: "-51.1791685",
            name: "Parceiros Voluntários - Canoas",
            about: "Presta assistencia a crianças de 06 a 15 anos",
            whatsapp: "51 986121510",
            images: [
                "https://images.unsplash.com/photo-1602488257131-7751faf0cca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor paciência para dar.",
            opening_hours: "Das 08 às 18",
            open_on_weekends: "0"
        })


        await saveOrphanage(db, {
            lat: "-29.9213158",
            lng: "-51.1465877",
            name: "SOS Casa de Acolhida",
            about: "Presta assistencia a crianças de 06 a 15 anos",
            whatsapp: "51 986121510",
            images: [
                "https://images.unsplash.com/photo-1602488257131-7751faf0cca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor paciência para dar.",
            opening_hours: "Das 08 às 18",
            open_on_weekends: "1"
        })

    // consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // const orphanage = await db.all('SELECT * FROM orphanages where id = "1"')
    // console.log(orphanage)

    // console.log(await db.run ('delete from orphanages where id >= 4'))
})