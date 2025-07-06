import type { ComponentPropsWithoutRef, ReactNode } from "react";
// Import tipe bawaan React untuk properti komponen dan tipe data anak (children)
import { Link, type LinkProps } from "react-router";
// Import komponen Link dan tipe LinkProps dari react-router

// Tipe dasar untuk properti Button dan ButtonLink
type BaseProps = {
  children: ReactNode; // Isi tombol (bisa teks atau elemen lain)
  textOnly?: boolean; // Opsi agar tombol hanya berupa teks
};

// Tipe untuk tombol biasa (button HTML)
type ButtonProps = ComponentPropsWithoutRef<"button"> & // Properti standar <button>
  BaseProps & { to?: never }; // Tidak boleh ada properti 'to'

// Tipe untuk tombol yang berupa link (menggunakan react-router Link)
type ButtonLinkProps = LinkProps & BaseProps & { to: string }; // Harus ada properti 'to'

// Fungsi untuk mengecek apakah props adalah ButtonLinkProps (punya properti 'to')
function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

// Komponen utama Button
export default function Button(props: ButtonProps | ButtonLinkProps) {
  // Jika props adalah ButtonLinkProps (punya 'to'), render <Link>
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`} // Tambahkan kelas CSS sesuai opsi
        {...otherProps} // Sebarkan properti lain ke <Link>
      >
        {children}
      </Link>
    );
  }

  // Jika bukan, render <button> biasa
  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`} // Tambahkan kelas CSS sesuai opsi
      {...otherProps} // Sebarkan properti lain ke <button>
    >
      {children}
    </button>
  );
}
