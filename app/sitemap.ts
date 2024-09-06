import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://jeeptourkamchatka.ru',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://jeeptourkamchatka.ru/ekstruziya_verblyud_khalatyrskiy_plyazh',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/vachkazhets',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/vulkan_gorely',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/vulkan_avachinskiy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/mys_mayachny',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/khalatyrskiy_plyazh',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/malaya_dolina_geyzerov_vodopad_snezhnuy_bars',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jeeptourkamchatka.ru/pereval_ilyuchinskiy_vodopad_vilyuchinskiy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}