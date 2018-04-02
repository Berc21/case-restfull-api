const express = require('express');
const router = express.Router();
const faker = require('faker');
const Shop = require('../../models/Shop');
const Category = require('../../models/Category');
const Campaign = require('../../models/Campaign');

router.get('/', function (req, res, next) {
    const categories = ["Kadin", "Erkek", "Cocuk", "Spor", "Canta"];
    const dates = ["April 3, 2018", "April 4, 2018", "April 5, 2018", "April 6, 2018", "April 7, 2018"];
    const description = ["TRENDYOL MAN - Yeni Koleksiyon", "U.S. Polo Assn. - Kadın & Erkek Tekstil", "Pierre Cardin - Erkek Tekstil", "İnci - Erken Yaz Fırsatı"];
    const images = ["https://img-trendyol.mncdn.com//Assets/ProductImages/OA/CampaignVisual/OriginalBoutiqueImages/20562/k3najywy_0_new.jpg", "https://img-trendyol.mncdn.com//Assets/ProductImages/OA/CampaignVisual/OriginalBoutiqueImages/21357/qroh3mag_0_new.jpg", "https://img-trendyol.mncdn.com//Assets/ProductImages/OA/CampaignVisual/OriginalBoutiqueImages/21592/nzxwcgar_0_new.jpg", "https://img-trendyol.mncdn.com//Assets/ProductImages/OA/CampaignVisual/OriginalBoutiqueImages/21766/1wblqbvp_11_new.jpg"];
    const campaignsImages = ["https://img-trendyol.mncdn.com/assets/banner/2018/rightBanners/jeanBanner.jpg", "https://img-trendyol.mncdn.com/assets/banner/2018/rightBanners/afBanner-basladi.jpg"]
    const campaigns = ['Kampanya 1', 'Kampanya 2'];
    for (let i = 0; i < 20; i++) {
        let shop = new Shop({
            name : faker.company.companyName(),
            date : dates[Math.floor(Math.random() * dates.length)],
            category: categories[Math.floor(Math.random() * categories.length)],
            description : description[Math.floor(Math.random() * description.length)],
            image: images[Math.floor(Math.random() * images.length)]
        });
        
        shop.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    for (let i = 0; i < campaigns.length; i++) {
        let camp = new Campaign({
            title: campaigns[i],
            image: campaignsImages[i]
        });
        camp.save();
    }
    res.redirect('/')
});


module.exports = router;
