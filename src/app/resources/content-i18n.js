import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Preethi',
        lastName:  'M',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.png',
        location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English']  // optional: Leave the array empty if you don't want to display languages
    }

    /*const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }*/

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/QubitMatrix',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'www.linkedin.com/in/preethim2403',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:preethi13m@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'UPL',
                    timeframe: t("about.work.experiences.UPL.timeframe"),
                    role: t("about.work.experiences.UPL.role"),
                    achievements: t("about.work.experiences.UPL.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                    ]
                },
                {
                    company: 'PES University',
                    timeframe: t("about.work.experiences.PES University.timeframe"),
                    role: t("about.work.experiences.PES University.role"),
                    achievements: t("about.work.experiences.PES University.achievements").split(";"),
                    images: [ ]
                },
                {
                    company: 'PESU',
                    timeframe: t("about.work.experiences.PESU.timeframe"),
                    role: t("about.work.experiences.PESU.role"),
                    achievements: t("about.work.experiences.PESU.achievements").split(";"),
                    images: [ ]
                }
            ]
        },
        studies: {
            display: false, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'PES University',
                    description: <>{t(`about.studies.institutions.PES University.description`)}</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Programming Languages',
                    description: <>{t("about.technical.skills.Programming Languages.description")}</>,
                    images: [ ]
                },
                {
                    title: 'Web Development',
                    description: <>{t("about.technical.skills.Web Development.description")}</>, // "." not accepted in next-intl namespace
                    images: [ ]
                },
                {
                    title: 'Database',
                    description: <>{t("about.technical.skills.Database.description")}</>, // "." not accepted in next-intl namespace
                    images: [ ]
                },
                {
                    title: 'Web and Network Security',
                    description: <>{t("about.technical.skills.Web and Network Security.description")}</>, // "." not accepted in next-intl namespace
                    images: [ ]
                },
                {
                    title: 'Data Engineering',
                    description: <>{t("about.technical.skills.Data Engineering.description")}</>, // "." not accepted in next-intl namespace
                    images: [ ]
                },
                {
                    title: 'Frequently Used Tools',
                    description: <>{t("about.technical.skills.Frequently Used Tools.description")}</>, // "." not accepted in next-intl namespace
                    images: [ ]
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    /*const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            { 
                src: '/images/gallery/img-04.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-05.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-06.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-07.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-08.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-09.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-10.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-11.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-12.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-13.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-14.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
        ]
    }*/
    return {
        person,
        social,
        home,
        about,
        blog,
        work
    }
};

export { createI18nContent };