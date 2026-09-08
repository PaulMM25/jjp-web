import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Download, Globe, ContactRound, BriefcaseBusiness, Mail, MessageCircle, Phone, Factory, Flame, Ship, Package } from "lucide-react";
import { company, companyStatement, getTeamMember, teamMembers, telephone } from "@/data/teamMembers.mjs";
import styles from "./page.module.css";
import CopyEmail from "./CopyEmail";

export const dynamicParams = false;

export function generateStaticParams() {
  return teamMembers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const member = getTeamMember((await params).slug);
  if (!member) notFound();
  return {
    title: `${member.name} | ${company}`,
    description: `${member.title} at ${company}`,
    robots: { index: false, follow: false },
  };
}

export default async function BusinessCard({ params }) {
  const member = getTeamMember((await params).slug);
  if (!member) notFound();
  const actions = [
    { label: "CALL", value: member.phone, href: `tel:${telephone(member)}`, Icon: Phone },
    { label: "WHATSAPP", value: "Send a message", href: `https://wa.me/${member.whatsapp}`, Icon: MessageCircle, external: true },
    { label: "EMAIL", value: member.email, href: `mailto:${member.email}`, Icon: Mail },
    { label: "LINKEDIN", value: "View profile", href: member.linkedin, Icon: BriefcaseBusiness, external: true },
  ];
  return (
    <main className={styles.shell}>
      <article className={styles.card} aria-labelledby="member-name">
        <div className={styles.hero}>
          <Image src="/hero-refinery.jpg" alt="" fill sizes="(max-width: 560px) 100vw, 540px" className={styles.industrial} />
          <header className={styles.header}>
          <Link href="/" className={styles.logo} aria-label="JJP Supplier Services home">
            <Image src="/brand/Logo-jjp-fondo-azul.png" alt="JJP Suppliers Services" width={200} height={200} sizes="150px" className={styles.logoImage} />
          </Link>
          <p className={styles.people}>PEOPLE<br />SOLUTIONS<br />RESULTS</p>
          </header>
          <p className={styles.heroCaption}>INDUSTRIAL<br />SUPPLY SOLUTIONS<br />FOR A SAFER AND<br />SMARTER TOMORROW</p>
          <div className={styles.diagonal} aria-hidden="true" />
        </div>
        <div className={styles.identity}>
          <div className={styles.portrait}>
            <Image src={member.image} alt={member.name} fill sizes="(max-width: 430px) 49vw, 210px" preload
              className={styles.photo} data-member={member.slug} />
          </div>
          <h1 id="member-name">{member.name}</h1>
          <p className={styles.title}>{member.title}</p>
          <p className={styles.statement}>{member.statement || companyStatement}</p>
        </div>
        <div className={styles.body}>
          <div className={styles.actions}>
            {actions.map(({ label, value, href, Icon, external }) => (
              label === "EMAIL" ? (
                <div key={label} className={`${styles.action} ${styles.emailCard}`} data-action="EMAIL">
                  <a href={href} className={styles.emailMain} aria-label={`EMAIL: ${member.name}`}>
                    <Icon size={28} aria-hidden="true" />
                    <span><strong>EMAIL</strong><small title={value}>{value}</small></span>
                  </a>
                  <CopyEmail email={value} />
                </div>
              ) : (
              <a key={label} href={href} className={styles.action} data-action={label}
                target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                aria-label={`${label}: ${member.name}${external ? " (opens in a new tab)" : ""}`}>
                <Icon size={28} aria-hidden="true" />
                <span><strong>{label}</strong><small>{value}</small></span>
                <ChevronRight size={17} aria-hidden="true" />
              </a>
              )
            ))}
          </div>
          <a className={styles.save} href={`/contacts/${member.slug}.vcf`} download={`${member.slug}.vcf`}>
            <ContactRound size={26} aria-hidden="true" /> SAVE CONTACT <Download size={24} aria-hidden="true" />
          </a>
          <Link href="/" className={styles.visit}><Globe size={24} aria-hidden="true" /> VISIT JJP SUPPLIERS SERVICES <ChevronRight size={20} aria-hidden="true" /></Link>
            <div className={styles.sectors}>
              {[[Flame, "OIL & GAS"], [Factory, "INDUSTRY"], [Ship, "MARINE"], [Package, "SUPPLIES"]].map(([Icon, label]) => (
                <span key={label}><Icon size={32} aria-hidden="true" /><span>{label}</span></span>
              ))}
            </div>
          <footer className={styles.footer}>
            <div><strong>JJP SUPPLIERS SERVICES</strong>
            <p>{companyStatement}</p></div>
            <div className={styles.footerPeople}>PEOPLE<br />SOLUTIONS<br />RESULTS</div>
          </footer>
        </div>
      </article>
    </main>
  );
}
