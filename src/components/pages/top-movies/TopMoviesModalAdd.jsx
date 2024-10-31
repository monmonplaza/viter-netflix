import useUploadPhoto from '@/components/custom-hook/useUploadPhoto'
import { InputPhotoUpload, InputText, InputTextArea } from '@/components/helpers/formInputs'
import { devImgPath } from '@/components/helpers/functions-general'
import { queryData } from '@/components/helpers/queryData'
import ModalWrapper from '@/components/partials/modals/ModalWrapper'
import SpinnerButton from '@/components/partials/spinners/SpinnerButton'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Form, Formik } from 'formik'
import { ImagePlusIcon, Upload, X } from 'lucide-react'
import React from 'react'
import * as Yup from 'Yup';

const TopMoviesModalAdd = ({setIsAdd, setIsSuccess, itemEdit, setIsValidate, setMessage}) => {

  const handleClose = () => setIsAdd(false);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/v1/upload-photo", 
  );
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/top-movies/${itemEdit.topmovies_aid}` :`/v1/top-movies`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["top-movies"],
      });

      // show error box
      if (data.success) {
        setIsAdd(false)
        setIsSuccess(true)
      } else {
        setIsValidate(true)
        setMessage(data.error)
        // dispatch(setSuccess(true));
        // dispatch(setMessage(`Record Successfully updated.`));
        // dispatch(setIsAdd(false));
      }
    },
  });




  const initVal = {
    topmovies_title: itemEdit ? itemEdit.topmovies_title : '',
    topmovies_year: itemEdit ? itemEdit.topmovies_year : '',
    topmovies_genre: itemEdit ? itemEdit.topmovies_genre : '',
    topmovies_rating: itemEdit ? itemEdit.topmovies_rating : '',
    topmovies_duration: itemEdit ? itemEdit.topmovies_duration : '',
    topmovies_summary: itemEdit ? itemEdit.topmovies_summary : '',
    topmovies_cast: itemEdit ? itemEdit.topmovies_cast : '',
    topmovies_ranking: itemEdit ? itemEdit.topmovies_ranking : '',
    topmovies_title_old: itemEdit ? itemEdit.topmovies_title : '',
  }


  const yupSchema = Yup.object({
    topmovies_title: Yup.string().required('Required'),
    topmovies_year: Yup.string().required('Required'),
    topmovies_genre: Yup.string().required('Required'),
    topmovies_rating: Yup.string().required('Required'),
    topmovies_duration: Yup.string().required('Required'),
    topmovies_summary: Yup.string().required('Required'),
    topmovies_cast: Yup.string().required('Required'),
    topmovies_ranking: Yup.string().required('Required'),
  })

  return (
    <ModalWrapper>
         <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
         
            mutation.mutate({...values,
              topmovies_image:
                (itemEdit?.topmovies_image === "" && photo) ||
                (!photo && "") ||
                (photo === undefined && "") ||
                (photo && itemEdit?.topmovies_image !== photo?.name)
                  ? photo?.name || ""
                  : itemEdit?.topmovies_image || "",
            });
            uploadPhoto();
          }}
        >
          {(props) => {
            return (
              <Form>
        <div className='modal-main absolute top-0 right-0 h-screen w-[320px] bg-secondary grid grid-row-[auto,_1fr,_auto]'>
            <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center">
                <h3 className='mb-0'>Add Movie</h3>
                <button onClick={handleClose}><X/></button>
            </div>
            <div className="modal-body  p-3 px-4">
            <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                {itemEdit === null && photo === null ? (
                  <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    src={
                      photo
                        ? URL.createObjectURL(photo) // preview
                        : devImgPath + "/" + itemEdit?.topmovies_image // check db
                    }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${mutation.isPending ? "opacity-40 pointer-events-none" : ""}`}
                  />
                )}

                <InputPhotoUpload
                  name="photo"
                  type="file"
                  id="photo"
                  accept="image/*"
                  title="Upload photo"
                  onChange={(e) => handleChangePhoto(e)}
                  onDrop={(e) => handleChangePhoto(e)}
                  className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${mutation.isPending ? "pointer-events-none" : ""}`}
                />
              </div>
                  

           
                <div className="input-wrap">

                <InputText
                    label="Title"
                    type="text"
                    name="topmovies_title"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrap">
                <InputText
                    label="Year"
                    type="text"
                    name="topmovies_year"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrap">
                <InputText
                    label="Genre"
                    type="text"
                    name="topmovies_genre"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrap">
                <InputText
                    label="Rating"
                    type="text"
                    name="topmovies_rating"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrap">
                <InputText
                    label="Duration"
                    type="text"
                    name="topmovies_duration"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrap">
                <InputText
                    label="Ranking"
                    type="text"
                    name="topmovies_ranking"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrap">
                <InputTextArea
                    label="Summary"
                    name="topmovies_summary"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrap">
                <InputTextArea
                    label="Cast"
                    name="topmovies_cast"
                    disabled={mutation.isPending}
                  />
                </div>
            </div>
            <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-0">
                <button className='btn btn-accent' type="submit" disabled={mutation.isPending}> {mutation.isPending ? <SpinnerButton/> : "Save"}</button>
                <button className='btn btn-cancel' type="reset" onClick={handleClose}> Cancel</button>
            </div>
        </div>
        </Form>
            );
          }}
        </Formik>
    </ModalWrapper>
  )
}

export default TopMoviesModalAdd