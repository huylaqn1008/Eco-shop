import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
    value: string[]
    onChange: (value: string) => void
    onRemove: (value: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, onRemove }) => {
    const onUpload = (result: any) => {
        onChange(result.info.secure_url)
    }

    return (
        <div>
            <div className='mb-4 flex flex-wrap'>
                {value.map((url, index) => (
                    <div key={index} className='relative w-32 h-32 m-2'>
                        <Image
                            src={url}
                            alt='collection'
                            objectFit='cover'
                            className='rounded-lg'
                            fill
                        />
                    </div>
                ))}
            </div>
            <CldUploadWidget uploadPreset="e0gb52ew" onUpload={onUpload}>
                {({ open }) => {
                    return (
                        <Button onClick={() => open()} className='bg-green-3 text-white'>
                            <Plus className='h-4 w-4 mr-2' />
                            Upload Image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload
