"use client"
import Image from "next/image"
import { useState } from "react"
import { moments } from "@/data/moments"
import es from "@/i18n/es.json"
import {
    Images,
    Users,
    Camera,
    Star,
    Tent
} from "lucide-react";
import styles from "./gallery.module.css"

function Frame({ pictureName, width, height, title }:
    { pictureName: string, width: number, height: number, title: string }) {
    return (<Image
        src={pictureName}
        width={width}
        height={height}
        alt={title}
    />
    )
}

const categories = [
    { id: "all", name: es.gallery.filters.all, count: counter('all'), icon: Images },
    { id: "trips", name: es.gallery.filters.trips, count: counter('trips'), icon: Camera },
    { id: "special", name: es.gallery.filters.special, count: counter("special"), icon: Star },
    { id: "everyday", name: es.gallery.filters.everyday, count: counter('everyday'), icon: Users },
]

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("all");
    return (
        <main className="w-full h-full grid grid-cols-3">
            <aside>
                <div className={styles.filters}>
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`${styles.filterButton} ${isActive ? styles.active : ""
                                    }`}
                            >
                                <Icon size={15} strokeWidth={1.8} />

                                <span>{category.name}</span>

                                <span className={styles.count}>
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </aside>
            <section className="columns-4 gap-6 col-span-2">
                {moments.map((moment) => (
                    <div className="mb-6 break-inside-avoid ">
                        <Frame pictureName={moment.image}
                            width={moment.width}
                            height={moment.height}
                            title={moment.title}
                            key={moment.id}
                        />
                    </div>
                ))}
            </section>
        </main>
    )
}

function counter(categoryName: string): number {
    if (categoryName !== 'all') {
        return moments.filter(moment => moment.category == categoryName).length
    } else {
        return moments.length
    }
}