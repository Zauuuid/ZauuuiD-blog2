import { Link } from "react-router-dom";
export default function NotFound() {
  return <main className="not-found page-wrap" id="main-content"><p className="eyebrow">الصفحة غير موجودة</p><h1>لم نعثر على هذه الصفحة.</h1><p>يمكنك العودة إلى الصفحة الرئيسية.</p><Link className="button button--primary" to="/">العودة للرئيسية</Link></main>;
}
