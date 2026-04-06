import Link from "next/link";
import type { Metadata } from "next";
import {
  LeafIcon,
  ShieldCheckIcon,
  HeartHandshakeIcon,
  PackageIcon,
  ScissorsIcon,
  BoxIcon,
  TruckIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZALO_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Giới thiệu về AllPink",
  description:
    "Tìm hiểu về AllPink — cơ sở tái chế nhựa uy tín, chuyên cung cấp hạt nhựa PP, PE, HDPE chất lượng cao.",
};

const VALUES = [
  {
    icon: ShieldCheckIcon,
    title: "Chất lượng",
    desc: "Mỗi lô hàng đều được kiểm tra kỹ trước khi đóng bao. Hạt nhựa đồng đều, sạch tạp chất.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Uy tín",
    desc: "Cam kết giao đúng hàng, đúng số lượng, đúng hẹn. Hoàn tiền nếu hàng không đúng mô tả.",
  },
  {
    icon: LeafIcon,
    title: "Bảo vệ môi trường",
    desc: "Tái chế nhựa phế liệu giảm rác thải ra môi trường — mỗi kg nhựa tái chế là một đóng góp nhỏ cho hành tinh xanh.",
  },
];

const PROCESS_STEPS = [
  {
    icon: PackageIcon,
    step: "01",
    title: "Thu mua phế liệu",
    desc: "Chúng tôi thu mua rổ nhựa, thau nhựa, can nhựa và các phế liệu nhựa PP/PE/HDPE từ các nguồn uy tín trong và ngoài tỉnh.",
  },
  {
    icon: ScissorsIcon,
    step: "02",
    title: "Phân loại & Làm sạch",
    desc: "Phế liệu được phân loại theo màu sắc, loại nhựa; sau đó rửa sạch và phơi khô trước khi đưa vào xay.",
  },
  {
    icon: BoxIcon,
    step: "03",
    title: "Xay & Đóng bao",
    desc: "Máy xay hiện đại tạo ra hạt nhựa đồng đều. Hạt được đóng bao 25kg hoặc 50kg theo yêu cầu khách hàng.",
  },
  {
    icon: TruckIcon,
    step: "04",
    title: "Giao hàng",
    desc: "Giao hàng trong ngày khu vực TP.HCM. Vận chuyển toàn quốc qua xe tải và đơn vị vận chuyển uy tín.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Giới thiệu về{" "}
            <span className="text-pink-600">AllPink</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Từ một xưởng nhỏ tái chế nhựa phế liệu, AllPink đã phát triển thành
            cơ sở cung cấp hạt nhựa tái chế đáng tin cậy cho nhiều doanh nghiệp
            sản xuất trên cả nước.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div
              className="h-64 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center"
              aria-hidden
            >
              <LeafIcon className="size-24 text-pink-400 opacity-60" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hành trình tái chế nhựa
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AllPink được thành lập với sứ mệnh đơn giản: biến nhựa phế liệu
                thành nguồn nguyên liệu có giá trị. Chúng tôi thu mua nhựa cũ từ
                hộ gia đình, chợ đầu mối và các cơ sở công nghiệp, qua quy trình
                xay — rửa — đóng bao nghiêm ngặt để tạo ra hạt nhựa tái chế chất
                lượng cao.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mỗi năm, AllPink xử lý hàng trăm tấn nhựa phế liệu, góp phần
                giảm đáng kể lượng rác thải nhựa ra môi trường đồng thời cung cấp
                nguyên liệu giá rẻ, ổn định cho ngành sản xuất trong nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Quy trình sản xuất chi tiết
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-2xl bg-white border p-5 shadow-sm"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <s.icon className="size-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-pink-400 uppercase mb-0.5">
                    Bước {s.step}
                  </p>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Card key={v.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-pink-100">
                    <v.icon className="size-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-base">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-pink-600 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Sẵn sàng hợp tác cùng AllPink?
          </h2>
          <p className="text-pink-100 mb-8">
            Liên hệ để nhận báo giá và tư vấn chọn loại hạt nhựa phù hợp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center rounded-md bg-white text-pink-600 hover:bg-pink-50 border border-white h-10 px-8 text-sm font-medium transition-colors"
            >
              Liên hệ ngay <ArrowRightIcon className="ml-2 size-4" />
            </Link>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white h-10 px-8 text-sm font-medium transition-colors"
            >
              Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
