import { NotFoundPage } from "nextra-theme-docs";

export default function NotFound() {
  return (
    <div>
      <NotFoundPage>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-1">Page Not Found</p>
        </div>
      </NotFoundPage>
    </div>
  )
}