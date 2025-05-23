import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image?: string;
  initials: string;
}

export default function TestimonialCard({ name, role, content, image, initials }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <div className="flex items-start mb-4">
        <Avatar className="h-12 w-12 border border-gray-200">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-brand-blue text-white">{initials}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
